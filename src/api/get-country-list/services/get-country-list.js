'use strict';

/**
 * get-country-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-country-list.get-country-list');
