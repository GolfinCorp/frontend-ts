import { ReactElement } from 'react';
import { Button, Grid, Flex } from '@chakra-ui/react';
import { Logo } from '@/components/atoms';
import { useNavigate } from 'react-router-dom';

type navItem = {
  title: string;
  link: string;
  icon: ReactElement;
  onClick?: () => void;
};

type propsT = {
  menuItems: {
    menu: navItem[];
    setting: navItem[];
  };
};
const Sidebar = ({ menuItems }: propsT) => {
  const { menu, setting } = menuItems;
  const navigate = useNavigate();

  const handleRouter = (link: string) => {
    navigate(link);
  };
  return (
    <>
      <Logo />
      <Flex my="10" flexDir="column" h="100%" gap="30vh">
        <Grid gap="5">
          {menu?.map((item, index) => (
            <Button
              variant={'ghost'}
              key={`${index}${item.link}`}
              justifyContent="start"
              gap="1"
              alignItems={'center'}
              leftIcon={item.icon}
              onClick={() => handleRouter(item.link)}
            >
              {item.title}
            </Button>
          ))}
        </Grid>
        <Grid gap="2">
          {setting?.map((item, index) => (
            <Button
              variant={'ghost'}
              key={`${index}${item.link}`}
              justifyContent="start"
              gap="1"
              alignItems={'center'}
              leftIcon={item.icon}
              onClick={item.onClick ?? (() => handleRouter(item.link))}
            >
              {item.title}
            </Button>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default Sidebar;
