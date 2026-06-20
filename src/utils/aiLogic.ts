/**
 * Utility functions for the EcoAware AI Assistant.
 * Provides logical decision making based on the user's current context (footprint).
 * @module aiLogic
 */

/**
 * Generates an AI response based on the user's query and their current carbon footprint.
 * @param {string} input - The user's chat message.
 * @param {number | null} userFootprint - The user's calculated daily carbon footprint in kg CO2.
 * @returns {string} The contextual AI response.
 */
export const generateEcoResponse = (input: string, userFootprint: number | null): string => {
  const lowerInput = input.toLowerCase();
  
  // Contextual advice based on footprint severity
  let contextAdvice = "";
  if (userFootprint !== null) {
    if (userFootprint > 15) {
      contextAdvice = " I notice your daily footprint is quite high today. Focusing on reducing car travel could have a huge impact! ";
    } else if (userFootprint < 5) {
      contextAdvice = " Your daily footprint is excellent! Keep up the great work. ";
    } else {
      contextAdvice = " Your footprint is about average, but there's always room to improve! ";
    }
  }

  if (lowerInput.includes('recycle') || lowerInput.includes('plastic')) {
    return `When recycling plastic, always check the number on the bottom! Numbers 1 and 2 are widely accepted. Make sure containers are rinsed and dry before tossing them in the bin.${contextAdvice}`;
  } 
  
  if (lowerInput.includes('car') || lowerInput.includes('drive') || lowerInput.includes('flight') || lowerInput.includes('transport')) {
    return `Transportation is a huge source of emissions. Choosing to walk, bike, or take public transit is the best way to cut down. If you must drive, carpooling helps a lot!${contextAdvice}`;
  } 
  
  if (lowerInput.includes('diet') || lowerInput.includes('meat') || lowerInput.includes('food')) {
    return `Meat production, particularly beef, is very carbon-intensive. Swapping just one or two meals a week for plant-based options can save hundreds of kg of CO2 per year.${contextAdvice}`;
  }

  return `That's a great question about sustainability. Small actions like reducing energy use, eating plant-based meals, or taking public transit can significantly lower your impact.${contextAdvice}`;
};
