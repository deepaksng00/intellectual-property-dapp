const routes = require("next-routes")();

routes.add('/intellectualproperty/trademarks/:address', '/intellectualproperty/TrademarkShow');
routes.add('/intellectualproperty/patents/:address', '/intellectualproperty/PatentShow');
routes.add('/intellectualproperty/designs/:address', '/intellectualproperty/DesignShow');

module.exports = routes;
