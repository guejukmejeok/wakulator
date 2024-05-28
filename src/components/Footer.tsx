import { FooterStyle } from "~/styles/components/footer"

export default function Footer(props: { characterIndex: number }) {
  const character = ["💜", "💛", "🖤", "❤", "💙", "💚"]

  return (
    <FooterStyle>
      <FooterStyle.Text>© 2023-2024 WAKULATOR. All Rights Reserved.</FooterStyle.Text>
      <FooterStyle.Text>
        Made by 그적미적, 이파리맛별사탕, Clouuud, Ayaan, SY with{" "}
        <FooterStyle.Text.Emoji>{character[props.characterIndex]}</FooterStyle.Text.Emoji>
      </FooterStyle.Text>
    </FooterStyle>
  )
}
