import consumer from "./consumer"

export function subscribe(): void {
  const channelOptions = {
    connected(): void {
      console.log("Connected to the game channelo!");
    },

    disconnected(): void {
      console.log("Disconnected from the game channel!");
    },
  };

  const GameChannel: ActionCable.Channel =
    consumer.subscriptions.create("GameChannel", channelOptions);
}
