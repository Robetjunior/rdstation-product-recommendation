import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 ? (
        <p>Nenhuma recomendação encontrada.</p>
      ) : (
        <ul>
          {recommendations.map((product) => (
            <li key={product.id} className="mb-4 p-4 border rounded shadow-sm">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">Categoria: {product.category}</p>
              <div className="mt-2">
                <h4 className="font-medium">Preferências:</h4>
                <ul className="list-disc list-inside">
                  {product.preferences.map((preference, index) => (
                    <li key={index}>{preference}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-2">
                <h4 className="font-medium">Funcionalidades:</h4>
                <ul className="list-disc list-inside">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecommendationList;
