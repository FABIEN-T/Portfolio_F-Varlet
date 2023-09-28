import PropTypes from 'prop-types'

export default function Tags({ tags, colorTag }) {
  return (
    tags.length > 0 && (
      <div className="flex flex-wrap ">
        {tags.map((tag, index) => (
          <div
            key={`${tag}-${index}`}
            className={`bg-${colorTag} opacity-50 text-xs text-white rounded-tl-md rounded-br-md mr-2 mb-1`}
          >
            <span className="p-2">{tag}</span>
            {/* {tag} */}
          </div>
        ))}
      </div>
    )
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

// console.log(tags, tags.length)
// let isTag = false
// if (tags[0] !== '') {
//   isTag = true
// }
