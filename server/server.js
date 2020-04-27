const Box = require('3box');
const {
    profileGraphQL, getProfile,
    getProfiles, getVerifiedAccounts
} = require('3box/lib/api')

// Using PROFILE API via 3box 
// const profile = await Box.getProfile('0x12345abcde')
// Get verified Twitter and Github accounts:
// const verifiedAccounts = await Box.getVerifiedAccounts(profile)


// Using GraphQL Endpoint

const fields = ['name', 'website', 'favorite cereal']
const values = ['Belphegor', 'tgthr.world', 'Honey Bunches']

const response = async() => await Box.public.set('email', 'alanvegaop@gmail.com');
console.log(response);