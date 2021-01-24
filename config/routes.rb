Rails.application.routes.draw do
  devise_for :users
  get 'users', to: 'users#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :items, only: [:index, :new, :show]
end
