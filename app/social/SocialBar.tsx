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
    <a href="https://www.linkedin.com/in/r0bertm0lnar/" target="_blank" aria-label="Linkedin Profile"><AiFillLinkedin /></a>
  )
}

function Mailto() {
  return (
    <FormModal />
  )
}

function Github() {
  return (
    <a href="https://github.com/DevRob" target="_blank" aria-label="Github Profile"><AiFillGithub /></a>
  )
}