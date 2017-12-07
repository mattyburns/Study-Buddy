class Api::V1::CardsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery except: :destroy, unless: -> { request.format.json? }

  def index
    if current_user
      deck = Deck.find(params[:deck_id])
      render json: {"cards" => deck.cards}
    else
      render json: {"signed_in" => false}
    end
  end


  def show
    if current_user
      card = Card.find(params[:id])
      render json: {"cards" => card}
    else
      render json: {"signed_in" => false}
    end
  end

  def create
    card = JSON.parse(request.body.read)
    new_card = Card.create(
      front_content: card["frontContent"],
      back_content: card["backContent"],
      deck_id: card["deckId"],
      user_id: card["userId"]
    )
    render json: new_card
  end

  def edit
    card = Card.find(params[:id])
    render json: card
  end

  def update
    card = Card.find(params[:id])
    card_update = JSON.parse(request.body.read)
    card.update(
      front_content: card_update["frontContent"],
      back_content: card_update["backContent"],
      deck_id: card_update["deckId"],
      user_id: card_update["userId"]
    )
    render :json => {"message" => "Update saved."}
  end

  def destroy
    deck = Deck.find(params[:deck_id])
    card = Card.find(params[:id])
    card.destroy
    render :json => { "cards" => deck.cards }
  end
end
