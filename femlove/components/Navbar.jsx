import {Stack, Card, Flex, Text} from '@sanity/ui'
// Adds markup and invokes renderDefault()
export default function MyEnhancedNavbar(props) {
  return (
    <Stack>
      <>{props.renderDefault(props)}</>
    </Stack>
  )
}
