'use strict';

/**
 * edoc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::edoc.edoc');
