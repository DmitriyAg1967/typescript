import Purchased from './Purchased';

/**                                                                                                                                                                                                                                                                                  
 * @module user                                                                                                                                                                                                                                                                      
 */                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                     
/**                                                                                                                                                                                                                                                                                  
 * Load user info by id                                                                                                                                                                                                                                                              
 *                                                                                                                                                                                                                                                                                   
 * @param {number} id user id                                                                                                                                                                                                                                                        
 * @returns {Object} user info                                                                                                                                                                                                                                                       
 */
export default class Book implements Purchased {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly pages: number,
    ) { }
}
