Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :quizzes do
      resources :submissions
      resources :questions
    end
    resources :questions do
      resources :choices, except: [:create]
    end
    resources :choice do
      resources :submission_choices
    end
    post 'questions/:question_id/submission/:submission_id/choices', to: 'choices#create'
    get '/idcatcher/', to: 'submissions#id_catcher'
    get '/show_grades/:quiz_id', to: 'submissions#show_grades'
    get '*other', to: 'static#index'
  end
end
