import * as C from './chance'
import * as I from './image'
export type CustomerComment = {
  uuid: string
  name: string
  jobTitle: string
  company: string
  avatar: string
  comment: string
}

export const makeCustomerCommnet = (
  uuid: string,
  name: string,
  jobTitle: string,
  company: string,
  avatar: string,
  comment: string
): CustomerComment => ({uuid, name, jobTitle, company, comment, avatar})

export const makeRandomCustomerComment = () =>
  makeCustomerCommnet(
    C.randomUUID(),
    C.randomName(),
    C.randomJobTitle(),
    C.randomCompanyName(),
    I.randomAvatar(),
    C.randomParagraphs(1)
  )
