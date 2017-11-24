class Api::V1::CardsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery except: :destroy, unless: -> { request.format.json? }

  def show
    if current_user
    render json: {"cards" => current_user.cards}
    else
      render json: {"signed_in" => false}
    end
  end

  def create
    card = JSON.parse(request.body.read)
    new_card = Card.create(
      front_content: card["frontContent"],
      back_content: card["backContent"],
      user_id: card["userId"]
    )
    render json: new_card
  end
end
