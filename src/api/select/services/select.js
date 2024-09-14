'use strict';

/**
 * select service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::select.select');
