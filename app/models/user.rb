class User < ApplicationRecord
  has_many :cards
  has_many :decks

  def self.update_or_create(auth)
    user = User.find_by(uid: auth[:uid]) || User.new
    user.attributes = {
      provider: auth[:provider],
      uid: auth[:uid],
      name: auth[:name],
    }
    user.save!
    user
  end
end
