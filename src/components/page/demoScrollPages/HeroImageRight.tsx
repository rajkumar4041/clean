import { IconCircleArrowDownFilled } from '@tabler/icons-react';
import { Button, Container, Text, Title } from '@mantine/core';
import classes from './HeroImageBgScroll.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Cleaning Services
              </Text>{' '}
              Cleaning is not about perfection, it's about progress
            </Title>

            <Text className={classes.description} mt={30}>
              with more than +100 plus services with +200 happy customers
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Scroll Down to know more
              <IconCircleArrowDownFilled style={{ marginLeft: 20 }} />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
