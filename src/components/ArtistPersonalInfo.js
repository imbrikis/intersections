import React, { useContext } from "react"
import { getMetadataByFilterId } from "../utils"
import { useFilterContext } from "./context/FilterContext"
import { DataContext } from "./context/DataContext"

const ArtistPersonalInfo = () => {
  const [data] = useContext(DataContext)
  const dataObjCopy = Object.assign({}, data)

  const { selectedFilter } = useFilterContext()
  let metadata

  if (selectedFilter.filterType) {
    metadata = getMetadataByFilterId(dataObjCopy, selectedFilter?.filterName)
  }

  const {
    Birthplace: birthplace,
    Email: email,
    Website: site,
    Other_Link: otherLink,
    Tip: tip,
  } = metadata.data

  return (
    <div className="mb-16">
      {birthplace && email && site && (
        <h3 className="pb-1 text-2xl font-bold mb-3.5">More Info</h3>
      )}
      {birthplace && (
        <p className="text-lg">
          <span className="font-bold pr-2">Birthplace:</span> {birthplace}
        </p>
      )}
      {site && (
        <p className="text-lg">
          <span className="font-bold pr-2">Website:</span>{" "}
          <a className="underline" target="_blank" rel="noreferrer" href={site}>
            {site}
          </a>
        </p>
      )}
      {email && (
        <p className="text-lg">
          <span className="font-bold pr-2">Email:</span>{" "}
          <a className="underline" href={`mailto: ${email}`}>
            {email}
          </a>
        </p>
      )}
      {tip && (
        <p className="text-lg">
          <span className="font-bold pr-2">Tip this artist:</span>{" "}
          <a className="underline" target="_blank" rel="noreferrer" href={tip}>
            {tip}
          </a>
        </p>
      )}
      {otherLink && (
        <p className="text-lg">
          <span className="font-bold pr-2">Additional Link:</span>{" "}
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href={otherLink}
          >
            {otherLink}
          </a>
        </p>
      )}
    </div>
  )
}

export default ArtistPersonalInfo
