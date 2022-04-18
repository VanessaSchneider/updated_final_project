Rails.application.routes.draw do
  

  resources :rocks
  resources :trivia
  resources :tasks
  resources :riddles
  resources :letters
  resources :words
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  #TODO login and delete profile should be in session

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"


  get "/getWords", to: "words#get_words"
  get "/getLetters", to: "letters#get_letters"
  get "/getTrivia", to: "trivia#get_trivia"
  get "/getTasks", to: "tasks#get_tasks"
  get "/getRocks", to: "rocks#get_rocks"
  post "/createrock", to: "rocks#create"
 



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end





 

  


