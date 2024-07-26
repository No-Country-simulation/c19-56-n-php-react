<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use App\Models\Contact;
use Illuminate\Notifications\Notification;

class ContactCreated extends Notification
{
    use Queueable;
    protected $contact;

    /**
     * Create a new notification instance.
     */
    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable): array
    {
        return ['database'];
    }



    public function toArray($notifiable)
    {
        return [
            'message' => 'A new contact has been created.',
        ];
    }

}
