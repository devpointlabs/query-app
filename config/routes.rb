Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :quizzes do
      resources :questions
    end
    resources :questions do
      resources :choices
    end
    resources :quizzes do
      resources :submissions
    end
    resources :submissions do
      resources :submission_choices
    end
    resources :choices do
      resources :submission_choices
    end
  end

end
