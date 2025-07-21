from django.shortcuts import render
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from django.http import JsonResponse


# Create your views here.
def indexPage(request):
    return render(request, 'index.html')

def predictionPage(request):
    return render(request, 'prediction.html')

def predictionTest(request):
    if request.method == 'POST':
        emplacement = request.POST.get('emplacement')
        age = request.POST.get('age')
        chambre = request.POST.get('chambre')
        cloture = request.POST.get('cloture')
        parking = request.POST.get('parking')
        niveau = request.POST.get('niveau')

        # Charger les données
        df = pd.read_csv("maison_prediction.csv")

        # Encoder les colonnes catégorielles
        cat_cols = ['Emplacement', 'Cloture', 'Parking', 'Niveau']
        encoders = {}
        for col in cat_cols:
            encoders[col] = LabelEncoder()
            df[col] = encoders[col].fit_transform(df[col])

        # Séparer X et y
        X = df.drop('Prix', axis=1)
        y = df['Prix']

        # Train/test split
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Entraînement du modèle
        model = RandomForestRegressor(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)

        # Encoder les inputs
        exemple = pd.DataFrame([{
            'Emplacement': encoders['Emplacement'].transform([emplacement])[0],
            'Age': age,
            'Chambre': chambre,
            'Cloture': encoders['Cloture'].transform([cloture])[0],
            'Parking': encoders['Parking'].transform([parking])[0],
            'Niveau': encoders['Niveau'].transform([niveau])[0],
        }])
        # Prédire
        prix_prevu = model.predict(exemple)[0]

        # Si AJAX, retourne JSON
        if request.headers.get('x-requested-with') == 'XMLHttpRequest':
            return JsonResponse({'prix': prix_prevu})

        # Sinon, comportement classique
        return render(request, 'prediction.html', {'prix': prix_prevu})
    else:
        return render(request, 'predication.html')

# def predictionTest(request):
#     if request.method == 'POST':
#         emplacement = request.POST.get('emplacement')
#         age = request.POST.get('age')
#         chambre = request.POST.get('chambre')
#         cloture = request.POST.get('cloture')
#         parking = request.POST.get('parking')
#         niveau = request.POST.get('niveau')

#         # Charger les données
#         df = pd.read_csv("maison_prediction.csv")

#         # Encoder les colonnes catégorielles
#         cat_cols = ['Emplacement', 'Cloture', 'Parking', 'Niveau']
#         encoders = {}
#         for col in cat_cols:
#             encoders[col] = LabelEncoder()
#             df[col] = encoders[col].fit_transform(df[col])

#         # Séparer X et y
#         X = df.drop('Prix', axis=1)
#         y = df['Prix']

#         # Train/test split
#         X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#         # Entraînement du modèle
#         model = RandomForestRegressor(n_estimators=100, random_state=42)
#         model.fit(X_train, y_train)

#         # Encoder les inputs
#         exemple = pd.DataFrame([{
#             'Emplacement': encoders['Emplacement'].transform([emplacement])[0],
#             'Age': age,
#             'Chambre': chambre,
#             'Cloture': encoders['Cloture'].transform([cloture])[0],
#             'Parking': encoders['Parking'].transform([parking])[0],
#             'Niveau': encoders['Niveau'].transform([niveau])[0],
#         }])
#         # Prédire
#         prix_prevu = model.predict(exemple)
#         return render(request, 'prediction.html', {'prix':prix_prevu})
