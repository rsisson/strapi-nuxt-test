module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd390bdaf614936a11172698467a01541'),
  },
});
