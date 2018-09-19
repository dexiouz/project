//import avatar images
import vote from './images/vote.jpg';
import writtenVote from './images/writtenVote.jpg';
import dera   from './images/dera.jpg';
import coat   from './images/coat.jpg';

import image2 from './images/image2.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.png';
import rlogo from  './images/rlogo.png';

const generateVoteCount = () => {
    return Math.floor((Math.random()*50)+15);
}
    const seed = {

        products:[
            {
                id:1,
                title: 'Yellow Pail',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: generateVoteCount(),
                submitterAvatarUrl: dera,
                productImageUrl: image2,
            },
            {
                id:2,
                title: 'supermajority: The fantasy congress League',
                description: 'Earn points when your favourite politicians pass legisslation.',
                url: '#',
                votes: generateVoteCount(),
                submitterAvatarUrl: writtenVote,
                productImageUrl: image7,
            },
            {
                id:3,
                title: 'Tinfoild: Tailored tinfoil hats',
                description: 'We already have your measurements and shipping address',
                url: '#',
                votes: generateVoteCount(),
                submitterAvatarUrl: vote,
                productImageUrl: image8,
            },
            {
                id:4,
                title: 'haught or Naught',
                description: 'High-minded or absent-minded? You decide.',
                url: '#',
                votes: generateVoteCount(),
                submitterAvatarUrl: coat,
                productImageUrl: rlogo,
            },

        ]
    }
    export default seed