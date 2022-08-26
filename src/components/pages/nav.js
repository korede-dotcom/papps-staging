import test from '../../assets/Ellipse 1.png'
import payment from '../../assets/payment.png'
import refund from '../../assets/refund.svg'
import logout from '../../assets/logout.png'
import security from '../../assets/security.png'
import disputes from '../../assets/disputes.png'
import payout from '../../assets/payout.png'
import preapproval from '../../assets/preapproval.png'

export const links = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        img: payment
    },
    {
        name: 'Refund',
        url: '/refund',
        img: refund
    },
    {
        name: 'Payouts',
        url: '/payouts',
        img: payout
    },
    {
        name: 'Pre-Approvals',
        url: '/pre-approval',
        img: preapproval
    },
    {
        name: 'Disputes',
        url: '/disputes',
        img: disputes
    },
    {
        name: 'Security',
        url: '/security',
        img: security
    },
    {
        name: 'Logout',
        url: '/',
        img: logout
    },
];