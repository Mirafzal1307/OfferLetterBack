'use strict';

/**
 * get-programm-name service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-programm-name.get-programm-name');
