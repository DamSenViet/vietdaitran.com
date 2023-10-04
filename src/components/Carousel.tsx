import NukaCarousel from 'nuka-carousel'
import { IconButton } from '@mui/material'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import withDefaultProps from '@/utils/withDefaultProps'
import { transparentize } from 'color2k'

const Carousel = withDefaultProps(NukaCarousel, {
  adaptiveHeight: true,
  adaptiveHeightAnimation: true,
  wrapAround: true,
  renderCenterLeftControls: ({ previousSlide, previousDisabled }) => (
    <IconButton
      title="Go to Previous Slide"
      aria-label="Go to Previous Slide"
      disabled={previousDisabled}
      onClick={previousSlide}
      sx={(theme) => ({
        margin: 1,
        backgroundColor: transparentize(
          theme.palette.grey[900],
          theme.palette.action.activatedOpacity
        ),
        '&:hover': {
          backgroundColor: theme.palette.grey[900],
        },
      })}
    >
      <MdKeyboardArrowLeft fill={'#FFFFFF'} size={24} />
    </IconButton>
  ),
  renderCenterRightControls: ({ nextSlide, nextDisabled }) => (
    <IconButton
      title=""
      aria-label=""
      disabled={nextDisabled}
      onClick={nextSlide}
      sx={(theme) => ({
        margin: 1,
        backgroundColor: transparentize(
          theme.palette.grey[900],
          theme.palette.action.activatedOpacity
        ),
        '&:hover': {
          backgroundColor: theme.palette.grey[900],
        },
      })}
    >
      <MdKeyboardArrowRight fill={'#FFFFFF'} size={24} />
    </IconButton>
  ),
})

export default Carousel
