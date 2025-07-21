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

def membrePage(request):
    return render(request, 'membre.html')

def predictionPage(request):
    return render(request, 'prediction.html')

def predictionTest(request):
    if request.method == 'POST':
        # Récupérer tous les champs du formulaire
        emplacement = request.POST.get('emplacement')
        chambres = request.POST.get('chambres')
        salle_de_bain = request.POST.get('salle_de_bain')
        salons = request.POST.get('salons')
        cuisine = request.POST.get('cuisine')
        parking = request.POST.get('parking')
        cloture = request.POST.get('cloture')
        materiaux = request.POST.get('materiaux')
        electricite = request.POST.get('electricite')
        eau = request.POST.get('eau')
        documents = request.POST.get('documents')
        age_maison = request.POST.get('age_maison')
        niveau = request.POST.get('niveau')
        positionnement = request.POST.get('positionnement')

        try:
            # Charger les données
            df = pd.read_csv("maison_prediction.csv")

            # Colonnes catégorielles à encoder
            cat_cols = ['Emplacement', 'Cuisine', 'Parking', 'Clôture', 'Matériaux', 'Électricité', 'Eau', 'Documents', 'Niveau', 'Positionnement']
            # Emplacement,Chambres,Salle de Bain,Salons,Cuisine,Parking,Clôture,Matériaux,Électricité,Eau,Documents,Âge Maison,Niveau,Positionnement,Prix
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

            # Encoder les inputs pour la prédiction
            exemple = pd.DataFrame([{
                'Emplacement': encoders['Emplacement'].transform([emplacement])[0],
                'Chambres': int(chambres),
                'Salle de Bain': int(salle_de_bain),
                'Salons': int(salons),
                'Cuisine': encoders['Cuisine'].transform([cuisine])[0],
                'Parking': encoders['Parking'].transform([parking])[0],
                'Clôture': encoders['Clôture'].transform([cloture])[0],
                'Matériaux': encoders['Matériaux'].transform([materiaux])[0],
                'Électricité': encoders['Électricité'].transform([electricite])[0],
                'Eau': encoders['Eau'].transform([eau])[0],
                'Documents': encoders['Documents'].transform([documents])[0],
                'Âge Maison': int(age_maison),
                'Niveau': encoders['Niveau'].transform([niveau])[0],
                'Positionnement': encoders['Positionnement'].transform([positionnement])[0],
            }])
            # Prédire
            prix_prevu = model.predict(exemple)[0]

            # Si AJAX, retourne JSON
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({'prix': prix_prevu})

            # Sinon, comportement classique
            return render(request, 'prediction.html', {'prix': prix_prevu})
        except Exception as e:
            error_message = str(e)
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({'error': error_message})
            return render(request, 'prediction.html', {'error': error_message})
    else:
        return render(request, 'prediction.html')

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
