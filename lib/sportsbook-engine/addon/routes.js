import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
    this.mount('sportsbook-live-engine');
    this.mount('sportsbook-prematch-engine');
});
