Rails.application.routes.draw do
  root 'static_pages#index'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  namespace :build do
    resources :decks do
      resources :cards
    end
  end

  namespace :study do
    resources :decks
  end

  namespace :api do
    namespace :v1 do
      resources :decks do
        resources :cards
      end
      scope :user do
        get 'is_signed_in', to: 'user#is_signed_in?'
      end
    end
  end
end
