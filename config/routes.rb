Rails.application.routes.draw do
  root 'items#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :items, only: [:index, :new]
end
