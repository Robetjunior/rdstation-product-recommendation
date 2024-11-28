import React, { useState, useEffect } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import {SubmitButton} from './SubmitButton';


function Form({ onFormSubmit }) {
  // Estados existentes
  const [preferences, setPreferences] = useState([]);
  const [features, setFeatures] = useState([]);
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedRecommendationType, setSelectedRecommendationType] = useState('MultipleProducts');

  // Novo estado para controle de carregamento
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Função para carregar as preferências e funcionalidades do backend
    const fetchOptions = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();

        // Extraindo preferências e funcionalidades únicas
        const allPreferences = data.flatMap(product => product.preferences);
        const uniquePreferences = [...new Set(allPreferences)];
        setPreferences(uniquePreferences);

        const allFeatures = data.flatMap(product => product.features);
        const uniqueFeatures = [...new Set(allFeatures)];
        setFeatures(uniqueFeatures);
      } catch (error) {
        console.error('Erro ao carregar as opções:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Inicia o estado de carregamento

    const formData = {
      selectedPreferences,
      selectedFeatures,
      selectedRecommendationType,
    };

    await onFormSubmit(formData); // Aguarda a conclusão da submissão do formulário

    setIsLoading(false); // Finaliza o estado de carregamento
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola a página para o topo
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        selectedPreferences={selectedPreferences}
        onPreferenceChange={setSelectedPreferences}
      />
      <Features
        features={features}
        selectedFeatures={selectedFeatures}
        onFeatureChange={setSelectedFeatures}
      />
      <RecommendationType
        selectedRecommendationType={selectedRecommendationType}
        onRecommendationTypeChange={setSelectedRecommendationType}
      />
      <SubmitButton text="Obter recomendação" isLoading={isLoading} />
    </form>
  );
}

export default Form;
