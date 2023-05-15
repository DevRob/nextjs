import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import FormModal from '../modal/FormModal'

export function SocialBar() {
  return (
    <div className="text-5xl flex justify-center gap-16 py-5">
      <Mailto />
      <Github />
      <Linkedin />
    </div>
  )
}

function Linkedin() {
  return (
    <AiFillLinkedin />
  )
}

function Mailto() {
  return (
    <FormModal />
  )
}

function Github() {
  return (
    <AiFillGithub />
  )
}