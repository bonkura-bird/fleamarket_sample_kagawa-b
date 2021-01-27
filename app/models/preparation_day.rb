class PreparationDay < ApplicationRecord

  self.data = [
    { id: 1, '1〜2日で発送'},
    { id: 2, '2〜3日で発送'},
    { id: 3, '4〜7日で発送'}
  ]

  include ActiveHash::Associations
  has_many :items

end
