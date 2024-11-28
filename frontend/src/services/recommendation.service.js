// recommendation.service.js

function getRecommendations(formData, products) {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType,
  } = formData;
  
  // Função para calcular a pontuação de correspondência de um produto
  const calculateMatchScore = (product) => {
    const preferenceMatches = product.preferences.filter((pref) =>
      selectedPreferences.includes(pref)
    ).length;

    const featureMatches = product.features.filter((feat) =>
      selectedFeatures.includes(feat)
    ).length;

    return preferenceMatches + featureMatches;
  };

  // Calcular a pontuação de correspondência para cada produto
  const scoredProducts = products.map((product) => ({
    ...product,
    matchScore: calculateMatchScore(product),
  }));

  // Ordenar os produtos pela pontuação de correspondência em ordem decrescente
  const sortedProducts = scoredProducts.sort(
    (a, b) => b.matchScore - a.matchScore
  );

  // Filtrar produtos com pontuação de correspondência maior que zero
  const recommendedProducts = sortedProducts.filter(
    (product) => product.matchScore > 0
  );

  // Retornar apenas o produto com a maior pontuação se o tipo de recomendação for "Produto Único"
  if (selectedRecommendationType === 'SingleProduct' && recommendedProducts.length > 0) {
    return [recommendedProducts[0]];
  }

  return recommendedProducts;
}

export default { getRecommendations };
