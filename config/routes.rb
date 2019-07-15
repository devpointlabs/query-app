Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :quizzes do
      resources :submissions
      resources :questions
    end
    resources :questions do
      resources :choices
    end
    resources :choice do
      resources :submission_choices
    end
    get '*other', to: 'static#index'
    get '/show_grades/:quiz_id', to: 'submissions#show_grades'
  end
end
