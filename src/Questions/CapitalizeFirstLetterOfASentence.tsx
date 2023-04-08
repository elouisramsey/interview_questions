import React from 'react'

export const capitalizeFirstLetterOfASentence = ( word : string) => {
  const splitTexts = word.split(' ')

  const capitalizeFirstLetter = splitTexts.map((word) => {
    const firstLetterInUppercase = word[0].toLocaleUpperCase()
    const removeFirstLetterFromWord = word.slice(1).toLocaleLowerCase()
    const recreateWord = firstLetterInUppercase + removeFirstLetterFromWord
    return recreateWord
  })

  return capitalizeFirstLetter.join(' ')
}

