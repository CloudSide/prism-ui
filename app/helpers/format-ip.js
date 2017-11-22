import Ember from 'ember';

export default Ember.Helper.extend({
  intl: Ember.inject.service(),

  compute(params, options) {
    let noIp = options.noIp || 'formatIp.noIp';
    let ip = params[0];

    if ( ip === '0:0:0:0:0:0:0:1' ) {
      ip = '::1';
    }

    if ( ip ) {
      return ip;
    } else {
      return ('<span class="text-muted">'+this.get('intl').t(noIp)+'</span>').htmlSafe();
    }
  }
});
