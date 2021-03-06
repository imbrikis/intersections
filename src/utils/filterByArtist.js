// iterate over the artwork array, check to see if selectedFilter Artist is listed
// on any of the artwork, and if it is, add isSelectedParent to artist,
// then add isSelectedChild field to the Artwork piece
export const artistAddParentField = (
  artworkArray,
  artistsArray,
  parentNode
) => {
  parentNode.isSelectedParent = true
  parentNode.fill = "white"
  parentNode.linkColor = "#A3F78E" // light green

  artworkArray.forEach(artwork => {
    if (artwork.data.Primary_Artist__REQUIRED_[0] === parentNode.id) {
      artwork.data.isSelectedChild = true

      artwork.data.Collaborators?.forEach(collab => {
        artistsArray.forEach(artist => {
          if (artist.recordId === collab) {
            artist.data.isSelectedChild = true
          }
        })
      })
    }
  })
  return artistsArray
}
