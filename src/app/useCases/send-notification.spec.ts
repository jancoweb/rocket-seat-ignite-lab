import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification"

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification)
  }
}

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      category: 'Social',
      content: 'aaaaa',
      recipientId: 'example-id'
    })

    expect(notifications).toHaveLength(1);
  })
})