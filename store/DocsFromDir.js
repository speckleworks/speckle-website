const slugify = require( "slugify" )
const fs = require( "fs" )
const fm = require( "front-matter" )
const dirTree = require( "directory-tree" )
const path = require( "path" )

export default ( directory ) => {

  let docsTree = dirTree( `./pages/${directory}`, { attributes: [ "mtime" ], extensions: /\.vue/ } )
  let flatArr = [ ]

  function parseItem( treeItem ) {
    if ( treeItem.name === 'index.vue' )
      return null
    
    treeItem.name = treeItem.name.replace(/_/g, " ")

    if ( treeItem.type === 'file' ) {
      try {
        let { attributes } = fm( fs.readFileSync( './' + treeItem.path, "utf8" ) )
        treeItem.attributes = attributes
        treeItem.name = attributes.title || treeItem.name

        let pathElms = treeItem.path.split( path.sep )

        pathElms[ pathElms.length - 1 ] = slugify( pathElms[ pathElms.length - 1 ].replace( /\.vue$/, "" ), { lower: true } )
        treeItem.slug = pathElms.join( '/' ).replace( 'pages/', "/" ).toLowerCase( )

        treeItem.attributes.order = treeItem.attributes.order || 0

        flatArr = [ ...flatArr, treeItem ]
      } catch {}
    } else {
      treeItem.attributes = {}
      try {
        let { attributes } = fm( fs.readFileSync( './' + treeItem.path + '/manifest', "utf8" ) )
        treeItem.attributes.order = attributes.order
        treeItem.attributes.summary = attributes.summary
      } catch {
        treeItem.attributes.order = 0
        treeItem.attributes.summary = 'HELLLO'
      }

      treeItem.children.forEach( kid => parseItem( kid ) )

      // sort the children
      try {
        treeItem.children = treeItem.children.sort( ( a, b ) => a.attributes.order - b.attributes.order )
      } catch {}

      try {
        treeItem.slug = treeItem.children[ 0 ].slug
      } catch {}
    }
  }

  docsTree.children = docsTree.children.filter( item => item.name !== 'index.vue')
  docsTree.children.forEach( kid => parseItem( kid ) )
  try {
    docsTree.children = docsTree.children.sort( ( a, b ) => a.attributes.order - b.attributes.order )
  } catch ( err ) {
    console.log( err )
  }

  return { docsTree, flatArr }
}
