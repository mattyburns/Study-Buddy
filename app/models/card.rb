class Card < ApplicationRecord
  belongs_to :user
  belongs_to :deck

  validates :front_content, presence: true
  validates :back_content, presence: true
end
