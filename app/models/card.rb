class Card < ApplicationRecord
  belongs_to :user
  has_many :decks

  validates :front_content, presence: true
  validates :back_content, presence: true
end
