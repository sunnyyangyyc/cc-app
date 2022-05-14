import { Box, Text, Flex, Image, Icon } from "@chakra-ui/react";

interface Props {
  key: string,
  item_text: string
  // icon_src: string
  icon_path: string

}
const EditorSideBarItem = (props: Props) => {
  return (
    <Box role="group" w="full" p="30px 7px" 
    _hover={{fill: "fontcolor.primary"}} >
      <Flex flexDirection="column" align="center" justify="flex-start">
        <Icon
          w="28px"
          h="24px"
          // src={props.icon_src}
          // alt={props.item_text}
          // fill='fontcolor.secondary'
          _groupHover={{fill: "fontcolor.primary"}}
          // fill='fontcolor.secondary'
        >
            <path fill="currentColor" d={props.icon_path} />
        </Icon>
        <Text
          m={2}
          as="span"
          color='fontcolor.secondary'
          fontSize="md"
          fontWeight="bold"
          lineHeight="19px"
          _groupHover={{color: "fontcolor.primary"}}
          
        >
          {props.item_text}
        </Text>
      </Flex>
    </Box>
  );
};

export default EditorSideBarItem;

<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.48 6.44033L12.6 0.640333C12.4045 0.429129 12.1657 0.262614 11.8999 0.152161C11.6341 0.0417079 11.3476 -0.0100804 11.06 0.000333046H2C1.46957 0.000333046 0.960859 0.211047 0.585786 0.586119C0.210714 0.961192 0 1.4699 0 2.00033V22.0003C0 22.5308 0.210714 23.0395 0.585786 23.4145C0.960859 23.7896 1.46957 24.0003 2 24.0003H26C26.5304 24.0003 27.0391 23.7896 27.4142 23.4145C27.7893 23.0395 28 22.5308 28 22.0003V8.44033C28 7.9099 27.7893 7.40119 27.4142 7.02612C27.0391 6.65105 26.5304 6.44033 26 6.44033H17.48ZM3 2.94033H10.6L13.56 6.44033H3V2.94033ZM25 20.9403H3V9.44033H25V20.9403Z" fill="#C8C5C5"/>
</svg>
