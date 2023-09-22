import PropTypes from 'prop-types'

export default function Tags({ tags }) {
  return (
    <div className="flex flex-wrap ">
      {tags.map((tag, index) => (
        <div
          key={`${tag}-${index}`}
          className="bg-myBlue opacity-40 text-xs text-white rounded-tl-md rounded-br-md mr-2 mb-1"
        >
          <span className="p-2 ">{tag}</span>
        </div>
      ))}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.string,
}
