<?php

namespace LVR\CreditCard\Cards;

use LVR\CreditCard\Contracts\CreditCard;

class Jcb extends Card implements CreditCard
{
    /**
     * Regular expression for card number recognition.
     *
     * @var string
     */
    public static $pattern = '/^(?:2131|1800|35\d{3})/';

    /**
     * Credit card type.
     *
     * @var string
     */
    protected $type = 'credit';

    /**
     * Credit card name.
     *
     * @var string
     */
    protected $name = 'jcb';

    /**
     * Brand name.
     *
     * @var string
     */
    protected $brand = 'JCB';

    /**
     * Card number length's.
     *
     * @var array
     */
    protected $number_length = [16, 17, 18, 19];

    /**
     * CVC code length's.
     *
     * @var array
     */
    protected $cvc_length = [3];

    /**
     * Test cvc code checksum against Luhn algorithm.
     *
     * @var bool
     */
    protected $checksum_test = true;
}
