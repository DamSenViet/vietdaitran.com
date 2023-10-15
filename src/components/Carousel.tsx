import React, { ComponentProps } from 'react'
import NukaCarousel from 'nuka-carousel'
import { useTheme, IconButton } from '@mui/material'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import MediaContainer from './MediaContainer'
import withDefaultProps from '@/utils/withDefaultProps'
import { transparentize } from 'color2k'

const CustomCarousel = withDefaultProps(NukaCarousel, {
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

const Carousel: React.FunctionComponent<
  ComponentProps<typeof NukaCarousel>
> = ({ ...props }) => {
  const theme = useTheme()
  return (
    <MediaContainer>
      <CustomCarousel
        {...props}
        style={{
          borderRadius: 16,
          backgroundColor: theme.palette.background.default,
          opacity: 1,
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.03) 75%, rgba(0, 0, 0, 0.03)), repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.03) 25%, #ebe7e0 25%, #ebe7e0 75%, rgba(0, 0, 0, 0.03) 75%, rgba(0, 0, 0, 0.03))'
              : 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03)), repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 25%, #080808 25%, #080808 75%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03))',
          backgroundPosition: '0 0, 23px 23px',
          backgroundSize: '46px 46px',
          backgroundRepeat: 'repeat',
        }}
      />
    </MediaContainer>
  )
}

export default Carousel
