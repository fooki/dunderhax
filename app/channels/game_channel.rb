class GameChannel < ApplicationCable::Channel
  def subscribed
    id = SecureRandom.uuid
    stream_from "game_channel_#{id}"
  end
end
