<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Notification Channel
    |--------------------------------------------------------------------------
    |
    | This option controls the default notification channel that will be used
    | by the notification system. This channel will be used if no specific
    | channel is specified when creating a notification.
    |
    */

    'default' => env('NOTIFICATION_CHANNEL', 'mail'),

    /*
    |--------------------------------------------------------------------------
    | Channels Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your notification channels. Laravel supports
    | a variety of channels out of the box, including mail, SMS, and more.
    | You may also add custom channels.
    |
    */

    'channels' => [
        'mail' => [
            'driver' => 'mail',
            'from' => [
                'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
                'name' => env('MAIL_FROM_NAME', 'Example'),
            ],
        ],
        'database' => [
            'driver' => 'database',
            'table' => 'notifications',
        ],
        
    ],

];
