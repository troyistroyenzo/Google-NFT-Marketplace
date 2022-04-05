import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bcnbyzob',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk3xFYJ4NOeOIyEYQlvMdOr8lGmQc3vUhXVuY7TyXCTlTzgbMB6Fd8J3WoaiY1iMloQ8FAXqw0Y7xX8QIJFAy5ErTeGjNxpXJXjyuSqfF3CzfuX12MiNrrobfr0B7uRbhoi3W4rJupoeFhWCg6AFKrdINAHf3WjdbEoD6AIEM5Hyc4BnSCBL',
  useCdn: false,
})